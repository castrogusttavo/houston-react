import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SausageIcon({ iconName = 'sausage', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
