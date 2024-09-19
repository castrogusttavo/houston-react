import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AmazonIcon({ iconName = 'amazon-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
