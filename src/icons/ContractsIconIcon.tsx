import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ContractsIconIcon({ iconName = 'contracts-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
