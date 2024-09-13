import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Edit01Icon({ iconName = 'edit-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
