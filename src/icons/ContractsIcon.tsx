import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ContractsIcon({ iconName = 'contracts', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
