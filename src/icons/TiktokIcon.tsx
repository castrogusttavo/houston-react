import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TiktokIcon({ iconName = 'tiktok', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
