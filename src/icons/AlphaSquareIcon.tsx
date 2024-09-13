import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlphaSquareIcon({
  iconName = 'alpha-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
