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

		//here filling the form with book title and author name to check if it is added when clicked submit
		await titleInput.fill('Glukosrevolutionen : balansera ditt blodsocker och förändra ditt liv')
		await authorInput.fill('Jessie Inchauspé')

		await expect(submitBtn).toBeEnabled()

		await submitBtn.click()


        await page.getByRole('button', { name: 'Katalog' }).click()
	    const addedBook = page.getByTestId('star-Glukosrevolutionen : balansera ditt blodsocker och förändra ditt liv')
	    await expect(addedBook).toBeVisible()


	})

	test('User can add several books and all of them appear in Katalog', async ({ page }) => {
        await page.getByRole("button", { name: "Lägg till bok" }).click();
		const titleInput = page.getByTestId('add-input-title')
		const authorInput = page.getByTestId('add-input-author')
		const submitBtn = page.getByTestId('add-submit')

        await expect(titleInput).toBeVisible();
		await expect(authorInput).toBeVisible();

		//here filling the form with book title and author name to check if it is added when clicked submit
		await titleInput.fill('Glukosrevolutionen : balansera ditt blodsocker och förändra ditt liv')
		await authorInput.fill('Jessie Inchauspé')

		await expect(submitBtn).toBeEnabled()

		await submitBtn.click()


        await page.getByRole('button', { name: 'Katalog' }).click()
	    const addedBook = page.getByTestId('star-Glukosrevolutionen : balansera ditt blodsocker och förändra ditt liv')
	    await expect(addedBook).toBeVisible()

		//for the second book filling the form with book title and author name to check if it is added when clicked submit
		await page.getByRole("button", { name: "Lägg till bok" }).click();
		const secondTitleInput = page.getByTestId('add-input-title')
		const secondAuthorInput = page.getByTestId('add-input-author')


        await expect(titleInput).toBeVisible();
		await expect(authorInput).toBeVisible();
		await secondTitleInput.fill('Hundraåringen som klev ut genom fönstret och försvann')
		await secondAuthorInput.fill('Jonas Jonasson')

		await expect(submitBtn).toBeEnabled()

		await submitBtn.click()


        await page.getByRole('button', { name: 'Katalog' }).click()
	    const secondAddedBook = page.getByTestId('star-Hundraåringen som klev ut genom fönstret och försvann')
	    await expect(secondAddedBook).toBeVisible()

	})

})
