import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Presentation02Icon({
  iconName = 'presentation-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
