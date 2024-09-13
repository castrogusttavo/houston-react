import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BorobudurIcon({ iconName = 'borobudur', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
