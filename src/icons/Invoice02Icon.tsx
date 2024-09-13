import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Invoice02Icon({
  iconName = 'invoice-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
