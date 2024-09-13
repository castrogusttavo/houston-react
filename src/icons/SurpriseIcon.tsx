import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SurpriseIcon({ iconName = 'surprise', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
