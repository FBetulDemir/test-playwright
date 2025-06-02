import { test, expect } from '@playwright/test';

test.describe('Reading list', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('click on the navigation links and see if they are working', async({page}) => {

        
        await page.getByRole('button', { name: 'Lägg till bok' }).click()
        await expect(page.getByTestId('add-input-title')).toBeVisible()

        await page.getByRole('button', { name: 'Katalog' }).click()
        const starBtn = page.getByTestId('star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen')
        await starBtn.click()

        await page.getByRole('button', { name: 'Mina böcker' }).click()
        await expect(page.getByTestId('fav-Hur man tappar bort sin TV-fjärr 10 gånger om dagen')).toBeVisible()

    })
    
})
