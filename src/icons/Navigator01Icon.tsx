import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Navigator01Icon({
  iconName = 'navigator-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
