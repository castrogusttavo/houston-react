import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiplomaIcon({ iconName = 'diploma', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
