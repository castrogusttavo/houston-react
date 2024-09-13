import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Comment02Icon({
  iconName = 'comment-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
