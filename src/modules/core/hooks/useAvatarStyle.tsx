import { useMemo } from 'react'

import adjustColorBrightness from '@/src/modules/core/utils/helpers/adjustColorBrightness'
import getColorFromSymbol from '@/src/modules/core/utils/helpers/getColorFromSymbol'

const useAvatarStyles = (symbol: string) => {
  const avatarText = useMemo(() => symbol, [symbol])
  const avatarColor = useMemo(() => getColorFromSymbol(symbol), [symbol])
  const textColor = useMemo(() => adjustColorBrightness(avatarColor, -50), [avatarColor])

  return { avatarText, avatarColor, textColor }
}

export default useAvatarStyles
