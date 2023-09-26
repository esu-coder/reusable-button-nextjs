import Button from './components/common/Button'
import { BUTTON_SIZES, BUTTON_VARIANTS } from './constants/enums'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Button
        variant={BUTTON_VARIANTS.Primary}
      >
        Click Me !
      </Button>

      <Button
        variant={BUTTON_VARIANTS.Secondary}
      >
        Secondary
      </Button>

      <Button
        variant={BUTTON_VARIANTS.PrimaryOutline}
      >
        Click Me !
      </Button>

      <Button
        variant={BUTTON_VARIANTS.SecondaryOutline}
      >
        Click Me !
      </Button>

      <Button
        variant={BUTTON_VARIANTS.Primary}
        size={BUTTON_SIZES.Large}
      >
        Size
      </Button>

      <Button
        variant={BUTTON_VARIANTS.Primary}
        size={BUTTON_SIZES.Small}
      >
        Size
      </Button>
    </main>
  )
}
