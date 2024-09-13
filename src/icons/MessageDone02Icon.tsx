import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageDone02Icon({
  iconName = 'message-done-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
