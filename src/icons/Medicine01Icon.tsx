import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Medicine01Icon({
  iconName = 'medicine-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
