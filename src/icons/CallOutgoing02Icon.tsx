import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallOutgoing02Icon({
  iconName = 'call-outgoing-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
