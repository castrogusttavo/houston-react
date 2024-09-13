import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlphabetHindiIcon({
  iconName = 'alphabet-hindi',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
