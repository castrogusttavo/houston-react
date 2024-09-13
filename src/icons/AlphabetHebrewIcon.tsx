import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlphabetHebrewIcon({
  iconName = 'alphabet-hebrew',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
