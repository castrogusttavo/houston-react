import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallReceived02Icon({
  iconName = 'call-received-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
