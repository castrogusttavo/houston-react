import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallIncoming01Icon({
  iconName = 'call-incoming-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
