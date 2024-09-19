import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallDone02Icon({
  iconName = 'call-done-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
