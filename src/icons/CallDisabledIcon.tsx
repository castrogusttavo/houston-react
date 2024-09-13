import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallDisabledIcon({
  iconName = 'call-disabled',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
