import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ZeppelinIcon({ iconName = 'zeppelin', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
