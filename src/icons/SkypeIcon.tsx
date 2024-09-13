import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SkypeIcon({ iconName = 'skype', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
