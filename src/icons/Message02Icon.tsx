import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Message02Icon({
  iconName = 'message-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
