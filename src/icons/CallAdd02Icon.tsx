import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallAdd02Icon({
  iconName = 'call-add-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
