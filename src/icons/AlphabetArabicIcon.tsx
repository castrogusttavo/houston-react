import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlphabetArabicIcon({
  iconName = 'alphabet-arabic',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
