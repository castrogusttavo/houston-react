import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserQuestion02Icon({
  iconName = 'user-question-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
