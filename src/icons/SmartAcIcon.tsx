import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SmartAcIcon({ iconName = 'smart-ac', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
