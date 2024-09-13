import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SubpoenaIcon({ iconName = 'subpoena', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
