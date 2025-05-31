import { test, expect } from '@playwright/test';

test.describe('Reading list', () => {

	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
	})

	test('title "Läslistan" is visible', async ({ page }) => {
		await expect(page).toHaveTitle('Läslistan')
	})
	
	test('Favorited book appears in "Mina böcker"', async ({ page }) => {
		// await page.getByRole('button', { name: 'Katalog' }).click()

		const starBtn = page.getByTestId('star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen')
		await starBtn.click()
		await expect(starBtn).toBeVisible()

		await page.getByRole('button', { name: 'Mina böcker' }).click()


		const favoriteBook = page.getByTestId('fav-Hur man tappar bort sin TV-fjärr 10 gånger om dagen')
		await expect(favoriteBook).toBeVisible()
	})


    
})
