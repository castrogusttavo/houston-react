import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareRootSquareIcon({
  iconName = 'square-root-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
