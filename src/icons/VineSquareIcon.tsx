import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VineSquareIcon({
  iconName = 'vine-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
