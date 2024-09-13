import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PenToolMinusIcon({
  iconName = 'pen-tool-minus',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
