import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallIncoming02Icon({
  iconName = 'call-incoming-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
