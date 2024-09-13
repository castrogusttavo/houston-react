import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AndroidIcon({ iconName = 'android', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
