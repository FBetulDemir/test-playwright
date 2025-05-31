import { test, expect } from '@playwright/test';

test.describe('Reading list - Add Book', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
	})

	test('User can add a new book and it appears in Katalog', async ({ page }) => {
        await page.getByRole("button", { name: "Lägg till bok" }).click();
		const titleInput = page.getByTestId('add-input-title')
		const authorInput = page.getByTestId('add-input-author')
		const submitBtn = page.getByTestId('add-submit')

        await expect(titleInput).toBeVisible();
		await expect(authorInput).toBeVisible();

		await titleInput.fill('Glukosrevolutionen : balansera ditt blodsocker och förändra ditt liv')
		await authorInput.fill('Jessie Inchauspé')

		await expect(submitBtn).toBeEnabled()

		await submitBtn.click()


        await page.getByRole('button', { name: 'Katalog' }).click()
	    const addedBook = page.getByTestId('star-Glukosrevolutionen : balansera ditt blodsocker och förändra ditt liv')
	    await expect(addedBook).toBeVisible()


	})

})
