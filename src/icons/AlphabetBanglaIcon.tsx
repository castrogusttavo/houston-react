import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlphabetBanglaIcon({
  iconName = 'alphabet-bangla',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
