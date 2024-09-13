import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlusMinus02Icon({
  iconName = 'plus-minus-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
