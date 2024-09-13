import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SmileIcon({ iconName = 'smile', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
