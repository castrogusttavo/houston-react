import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallMinus02Icon({
  iconName = 'call-minus-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
