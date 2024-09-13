import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Forward01Icon({
  iconName = 'forward-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
