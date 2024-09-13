import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Exchange02Icon({
  iconName = 'exchange-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
