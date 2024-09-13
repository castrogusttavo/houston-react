import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Mouse16Icon({ iconName = 'mouse-16', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
