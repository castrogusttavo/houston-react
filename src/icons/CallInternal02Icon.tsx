import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallInternal02Icon({
  iconName = 'call-internal-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
