import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LaughingIcon({ iconName = 'laughing', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
