import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RecordIcon({ iconName = 'record', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
