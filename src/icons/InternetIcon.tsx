import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InternetIcon({ iconName = 'internet', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
