import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'
import { t } from 'i18next'

// Для тестирования
export const BagButton = () => {
	const [error, setError] = useState(false)

	const onThrow = () => setError(true)

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])

	return (
		<Button
			onClick={onThrow}
		>
			{t('Trow Error')}
		</Button>
	)
}
